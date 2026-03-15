const { exportObjectProperties } = require("../app.js")

// test exportObjectProperties function 
test.each(
    [
        [
            "test 01 check with 2 keys",
            { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 },
            [ "name", "level" ],
            [ {key: "name", value: "мечник"}, {key: "level", value: 2}, {key: "attack", value: 80}, {key: "defence", value: 40}, {key: "health", value: 10} ]
        ],
        [
            "test 02 check without keys array",
            { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 },
            [],
            [ {key: "attack", value: 80}, {key: "defence", value: 40}, {key: "health", value: 10}, {key: "level", value: 2}, {key: "name", value: "мечник"} ]
        ],
        [
            "test 03 check with all keys",
            { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 },
            [ "defence", "attack", "level", "health", "name" ],
            [ {key: "defence", value: 40}, {key: "attack", value: 80}, {key: "level", value: 2}, {key: "health", value: 10}, {key: "name", value: "мечник"} ]
        ],
    ]
)(
    "%s",
    (_, obj, keys, test_result) => {
        expect(exportObjectProperties(obj, keys)).toMatchObject(test_result)
    }
)
