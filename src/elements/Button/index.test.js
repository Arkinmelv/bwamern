import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from './index'

//test compenent button isDisable
test("Should not allowed click button if isDisable is parent", () => {
    const { container } = render(<Button isDisable></Button>);

    expect(container.querySelector("span.disable")).toBeInTheDocument();
})

//test compenent button isLoading
test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
})

//test compenent button a tag isExternal
test("Should render <a> tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
})

//test compenent button Link
test("Should render <Link> Compenent", () => {
    const { container } = render(
    <Router>
        <Button href="" type="link"></Button>
    </Router>);

    expect(container.querySelector("a")).toBeInTheDocument();
})