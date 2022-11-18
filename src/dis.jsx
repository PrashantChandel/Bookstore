import { Disclosure } from '@headlessui/react'
import Example from './navbar';
// import MyLink from './MyLink'


function MyDisclosure() {
  return (
    <Disclosure>
      <Disclosure.Button>Open mobile menu</Disclosure.Button>
      <Disclosure.Panel>
        <Disclosure.Button as={Example} href="#">
          Home
        </Disclosure.Button>
        Here is the Panel
      </Disclosure.Panel>
    </Disclosure>
  )
}

export default MyDisclosure;