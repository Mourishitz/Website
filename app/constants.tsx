type Constants = {
    themes: Theme[];
}

type Theme = {
    name: string;
    value: string;
}

export const constants: Constants = {
    themes: [
        {
            name: "Emerald",
            value: "emerald",
        },
        {
            name: "Bumblebee",
            value: "bumblebee",
        },
        {
            name: "Dracula",
            value: "dracula",
        },
        {
            name: "Sunset",
            value: "sunset",
        }
    ]
}