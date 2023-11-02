import type { Meta, StoryObj } from "@storybook/svelte"
import Setup from "./Setup.svelte"

const meta = {
    title: "Compositions/Setup",
    component: Setup,
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-450&t=TXrsbGqeTDQsUdae-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A450",
        },
    },
} satisfies Meta<Setup>

export default meta

type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: "Default Story",
}

export const Story2: Story = {
    name: "Styling Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-496&t=TXrsbGqeTDQsUdae-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A496",
        },
    },
}

export const Story3: Story = {
    name: "Default Names Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-520&t=TXrsbGqeTDQsUdae-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A520",
        },
    },
}
