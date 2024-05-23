import { Icon } from '@iconify/react';


const NoData = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <Icon icon="openmoji:no-stencil" width={100} />
            <p className="text-gray-900 font-light text-xl">Sorry there is still not available yet</p>
        </div>
    )
}

export default NoData