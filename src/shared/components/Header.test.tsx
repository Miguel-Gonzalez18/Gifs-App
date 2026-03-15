import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    const title = "GisfApp"
    test('Should render the title correctly', () => {
        render(<Header title={title}/>)
        expect(screen.getByText(title)).toBeDefined()
    })
    test('Should render the description when provided', () => {
        const description = "Test description"
        render(<Header title={title} description={description}/>)
        expect(screen.getByText(description)).toBeDefined()
        expect(screen.getByRole('paragraph')).toBeDefined()
    })
    test('Should not render the description when not provided', () => {
        
        // const { container } = render(<Header title={title}/>)

        // const divElement = container.querySelector('.content-center')
        // const h1 = divElement?.querySelector('h1')
        // const p = divElement?.querySelector('p')

        // expect(h1?.innerHTML).toBe(title)
        // expect(p).toBeNull()
    })
})