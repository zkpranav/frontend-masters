const { getNewUser, mapObjectToArray } = require('./utils.js')

describe('mapObjectToArray()', () => {
    test('Maps object values to arrays', () => {
        const result = mapObjectToArray(
            { shake: 1, fries: 69, fast: -0 },
            (key, value) => {
                return value
            }
        )

        expect(result).toEqual([1, 69, -0])
    })

    test('Callback triggers for every element', () => {
        const mockFunction = jest.fn()

        mapObjectToArray({a: 1, b: 1, c: 1}, mockFunction)
        expect(mockFunction.mock.calls.length).toBe(3)
    })
})

describe('getNewUser()', () => {
    test('User is returned', async () => {
        const user = await getNewUser(1)

        expect(user).toBeTruthy()
    })

    test('Error is thrown if no user found', async () => {
        // Exactly one assertion must aways trigger
        expect.assertions(1)

        try {
            const user = await getNewUser(10)
        } catch(e) {
            expect(e.message).toBe('No such user exists')
        }
    })
})