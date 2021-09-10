function delay(time) {
    return new Promise(resolve => {
        return setTimeout(resolve, time)
    })
}

const users = [
    {
        email: 'goku@test.com',
        id: 1,
        name: 'Goku',
        verified: false
    }
]

async function getNewUser(id) {
    await delay(100)
    const user = users.find(user => {
        return user.id == id
    })

    if (!user) {
        throw new Error('No such user exists')
    } else {
        return user
    }
}

function mapObjectToArray(obj, mapping) {
    const arrayToReturn = []
    for (const key in obj) {
        const value = obj[key]

        arrayToReturn.push(mapping(key, value))
    }

    return arrayToReturn
}

module.exports = {
    getNewUser,
    mapObjectToArray
}