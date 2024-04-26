import { Button } from '@nextui-org/react'

const Custom_Button = ({ formAction, Children, ...props }) => {
    const handleClick = (e) => {
        e.preventDefault()
        if (formAction) {
            formAction()
        }
    }

    return (
        <Button {...props} onClick={handleClick}>
            {Children}
        </Button>
    )
}

export default Custom_Button