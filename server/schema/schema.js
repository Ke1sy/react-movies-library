const graphql = require('graphql');
const {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLBoolean} = graphql;

const Movies = require("../models/movies");
const Directors = require("../models/directors");

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        rate: {type: GraphQLInt},
        watched: {type: new GraphQLNonNull(GraphQLBoolean)},
        director: {
            type: DirectorType,
            resolve({directorId}, args) {
                return Directors.findById(directorId)
            }
        },
    })
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)},
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return Movies.find({directorId: parent.id})
            }
        }
    })
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Movies.findById(id)
            }
        },

        director: {
            type: DirectorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}) {
                return Directors.findById(id)
            }
        },

        directors: {
            type: new GraphQLList(DirectorType),
            args: {name: {type: GraphQLString}},
            resolve(parent, {name}) {
                return Directors.find({name: {$regex: name, $options: 'i'}})
            }
        },

        movies: {
            type: new GraphQLList(MovieType),
            args: {name: {type: GraphQLString}},
            resolve(parent, {name}) {
                return Movies.find({name: {$regex: name, $options: 'i'}})
            }
        }
    }
});

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: ({
        addDirector: {
            type: DirectorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parent, {name, age}) {
                const director = new Directors({name, age});
                return director.save()
            }
        },

        addMovie: {
            type: MovieType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                directorId: {type: GraphQLID},
                rate: {type: GraphQLInt},
                watched: {type: new GraphQLNonNull(GraphQLBoolean)},
            },
            resolve(parent, {name, genre, directorId, rate, watched}) {
                const movie = new Movies({name, genre, directorId, rate, watched});
                return movie.save()
            }
        },
        deleteDirector: {
            type: DirectorType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return Directors.findByIdAndRemove(id);
            }
        },
        deleteMovie: {
            type: MovieType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, {id}) {
                return Movies.findByIdAndRemove(id);
            }
        },

        updateMovie: {
            type: MovieType,
            args: {
                id: {type: GraphQLID},
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                directorId: {type: GraphQLID},
                rate: {type: GraphQLInt},
                watched: {type: new GraphQLNonNull(GraphQLBoolean)},
            },
            resolve(parent, {id, name, genre, directorId, rate, watched}) {
                return Movies.findByIdAndUpdate(
                    id,
                    {$set: {name, genre, directorId,  rate, watched}},
                    {new: true}
                )
            }
        },

        updateDirector: {
            type: DirectorType,
            args: {
                id: {type: GraphQLID},
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parent, {id, name, age}) {
                return Directors.findByIdAndUpdate(
                    id,
                    {$set: {name, age}},
                    {new: true}
                )
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutations
});