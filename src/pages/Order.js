import Footer from "../components/Footer"
import Head from "../components/Head"
import Nav from "../components/Nav"

const Info = () => {
    return (
        <div className='w-full bg-white flex flex-col'>
            <div className='flex'>
                <span>name:</span>
                <form>
                    <input />
                </form>
                <div>
                    <input type='checkbox' id='sir' />
                    <label for='sir'>sir</label>
                </div>
                <div>
                    <input type='checkbox' id='woman' />
                    <label for='woman'>woman</label>
                </div>
                <div>
                    <input type='checkbox' id='nameHidden' />
                    <label for='nameHidden'>匿名</label>
                </div>
            </div>
        </div>
    )
}

const Order = (props) => {
    console.log(props.match.params.name)
    return (
        <div className='w-full h-screen flex flex-col'>
            <Head />
            <Nav />
            <div className='w-full flex-grow flex-col bg-gray-100 md:px-16 space-y-2' >
                <div className='text-2xl font-bold py-3 border-b-2' >项目捐赠</div>
                <div className='w-full flex bg-white'>
                    <div className='w-40 bg-red-400'></div>
                    <div className='flex flex-col flex-grow px-3'>
                        <div className='px-2 py-1' >xxx基金会</div>
                        <div className='px-2 py-1' >校友捐赠</div>
                        <div className='px-2 py-1' >money</div>
                    </div>
                </div>
                <div>是否需要收据</div>
                <div className='bg-white flex flex-col px-2 py-1 divide-y-2'>
                    <div className='flex'>
                        <input className='my-auto' type='checkbox' name='reciptT' id='reciptT' />
                        <label className='px-2' for='reciptT'>need recipt</label>
                    </div>
                    <div className='flex'>
                        <input className='my-auto' type='checkbox' name='reciptT' id='reciptF' checked />
                        <label className='px-2' for='reciptF'>do not need recipt</label>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order