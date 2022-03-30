import React from 'react'
import { render  } from '@testing-library/react'
import Button from './index';
import { BrowserRouter as Router } from 'react-router-dom';

test("should not allowed click button if isDisabled is present", ()=>{
    const {container } = render(<Button isDisabled></Button>)
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})
test("should render loading/spinner", ()=>{
    const {container, getByText } = render(<Button isLoading></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument()
})

test("should render tag <a>", ()=>{
    const {container, getByText } = render(<Button isExternal type="link"></Button>)
    expect(container.querySelector("a")).toBeInTheDocument()
})

test("should render <link> component", ()=>{
    const {container, getByText } = render(
      <Router>
        <button href="" type="link">

        </button>
      </Router>
    )

    expect(container.querySelector("a")).toBeInTheDocument();
}) 