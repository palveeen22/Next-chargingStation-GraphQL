import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import ChargeStationList from './ChargeStationList';
import ChargeStationDetails from './ChargeStationDetails';

type TProps = {
    handleClick: (id: bigint) => void;
    showDrawer: () => void
    open: boolean
    setOpen: boolean
    id: bigint | null
    setMapData: any

}

const DrawerDetailStation = ({ handleClick, showDrawer, open, setOpen, id, setMapData }: TProps) => {
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
                <ChargeStationDetails id={id} setMapData={setMapData} />
            </Drawer>
        </>
    );
};

export default DrawerDetailStation;