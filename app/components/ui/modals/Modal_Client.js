'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import { easeInOut } from 'framer-motion'

const Modal_Client = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    return (
        <>
            <Button color='secondary' size='sm' onPress={onOpen}>Add client</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop='opaque'
                motionProps={{
                    variants: {
                        enter: { scale: 1, opacity: 1, transition: {
                            duration: .5, ease: 'easeIn' }
                        },
                        exit: { scale: .5, opacity: 0, transition: {
                            duration: .5, ease: 'easeOut' }
                        }
                    }
                }}
                >
            <ModalContent>
                {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">
                        Modal Title
                    </ModalHeader>
                    <ModalBody>
                        <form>
                            <input type="text" placeholder="Client Name" className="input" />
                            <input type="text" placeholder="Client Email" className="input" />
                            <input type="text" placeholder="Client Phone" className="input" />
                            <input type="text" placeholder="Client Address" className="input" />
                            <input type="text" placeholder="Client City" className="input" />
                            <input type="text" placeholder="Client State" className="input" />
                            <input type="text" placeholder="Client Zip" className="input" />
                            <input type="text" placeholder="Client Country" className="input" />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Action
                        </Button>
                    </ModalFooter>
                </>
                )}
            </ModalContent>
            </Modal>
        </>
    )
}

export default Modal_Client