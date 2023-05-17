const data = [
    {
        name: "Alice",
        bio: "This is Alice's Bio"
    },

    {
        name: "Bob",
        bio: "This is Bob's Bio"
    },

    {
        name: "Hamza",
        bio: "This is Hamza's Bio"
    }
]

export function fetchBio(name){
    for(let user of data){
        if(user.name === name){
            return user.bio;
        }
    }
}