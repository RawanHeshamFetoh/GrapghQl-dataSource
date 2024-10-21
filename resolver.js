const users = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
];

export const resolver ={
    Query: {
        users: () => users,
        user: (_, { id }) => users.find(user => user.id === id),
    },
    Mutation: {
        addUser: (_, { name, email }) => {
            const newUser = { id: String(users.length + 1), name, email };
            users.push(newUser);
            return newUser;
        },
        deleteUser: (_, { id }) => {
            const index = users.findIndex(user => user.id === id);
            if (index === -1) {
                return 'User not found';
            }
            users.splice(index, 1);
            return 'User deleted successfully';
        },
    },
}