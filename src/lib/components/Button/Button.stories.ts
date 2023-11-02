import type { Meta, StoryObj } from "@storybook/svelte"
import Button from "./Button.svelte"

const meta = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        label: { control: "text" },
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-581&t=u79YW8Z1TH8yC4Vt-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A581",
        },
    },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

export const Story1: Story = {
    args: {
        label: "I'm a button :)",
    },
    name: "Default Story",
}

export const Story2: Story = {
    args: {
        label: "I'm a button :)",
    },
    name: "Styling story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-595&t=yHU0otmEVGMecoxk-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A595",
        },
    },
}
