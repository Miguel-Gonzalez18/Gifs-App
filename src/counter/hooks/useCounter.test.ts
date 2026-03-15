import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe('useCounter', () => {
    test("Should initialize with defauld value of 10", () => {
        const { result } = renderHook(()=> useCounter())
        expect(result.current.counter).toBe(10)
    })

    test("Should initialize with value 20", () => {
        const initialize = 20
        const { result } = renderHook(()=> useCounter(initialize))
        expect(result.current.counter).toBe(initialize)
    })

    test("Should increment counter when handleAdd is called", () => {
        const { result } = renderHook(()=> useCounter())

        act(()=> {
            result.current.handleAdd()
        })
        
        expect(result.current.counter).toBe(11)
    })

    test("Should subtract counter when handleAdd is called", () => {
        const { result } = renderHook(()=> useCounter())

        act(()=> {
            result.current.handleSubtract()
        })
        
        expect(result.current.counter).toBe(9)
    })

    test("Should reset counter when handleAdd is called", () => {
        const { result } = renderHook(()=> useCounter())

        act(()=> {
            result.current.handleReset()
        })
        
        expect(result.current.counter).toBe(10)
    })
})