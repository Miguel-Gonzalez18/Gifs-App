import { describe, expect, test, vi } from "vitest";
import MyCounterApp from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("MyCounterApp", () => {
    const handleAdd = vi.fn()
    const handleSubtract = vi.fn()
    const handleReset = vi.fn()

    vi.mock('../hooks/useCounter.tsx', () => ({
        counter: 40,
        handleAdd: handleAdd,
        handleReset: handleReset,
        handleSubtract: handleSubtract
    }))

    test("Should render conmponent", () => {
        render(<MyCounterApp/>)

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            'counter: 40'
        )

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined()
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined()
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined()
    })

    test("Should call handleAdd if button is clicked", () => {
        render(<MyCounterApp/>)

        const button = screen.getByRole('button', { name: '+1' })

        fireEvent.click(button)
        
        expect(handleAdd).toHaveBeenCalled()
        expect(handleReset).toHaveBeenCalled()
        expect(handleSubtract).toHaveBeenCalled()
    })
})
