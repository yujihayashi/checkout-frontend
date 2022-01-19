import { render, screen } from '@testing-library/react'
import Button from '@/components/interface/button'

describe('Button component', () => {
    it('render with default props', () => {
        render(<Button>Add to cart</Button>)

        const button = screen.getByRole('button', {
            name: /add to cart/i,
        })

        expect(button).toHaveClass('default')
    })

    it('render with primary class', () => {
        render(<Button color="primary">Add to cart</Button>)

        const button = screen.getByRole('button', {
            name: /add to cart/i,
        })

        expect(button).toHaveClass('primary')
    })
})
