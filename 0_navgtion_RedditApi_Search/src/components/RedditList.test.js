const RedditList = require("./RedditList")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new RedditList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Search", () => {
    let inst

    beforeEach(() => {
        inst = new RedditList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.Search("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.Search("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.Search("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.Search("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.Search(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
