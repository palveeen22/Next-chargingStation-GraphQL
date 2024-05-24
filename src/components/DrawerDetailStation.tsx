import React, { Dispatch, SetStateAction, useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Drawer } from 'antd';
import ChargeStationList from './ChargeStationList';
import ChargeStationDetails from './ChargeStationDetails';
import LocationCard from './LocationCard';

type TProps = {
    handleClick: (id: bigint) => void;
    showDrawer: () => void
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>;
    id: bigint | null
    data: any

}

const DrawerDetailStation = ({ handleClick, showDrawer, open, setOpen, id, data }: TProps) => {
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    return (
        <>
            <button onClick={showDrawer}>
                <div className='w-full gap-y-10'>
                    <ChargeStationList handleClick={handleClick} />
                </div>
            </button>
            <Drawer
                placement={'bottom'}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                height={600}
            >
                <ChargeStationDetails id={id} setMapData={data} />
                <div className='my-2'>
                    <LocationCard data={data} />

                </div>
            </Drawer>
        </>
    );
};

export default DrawerDetailStation;