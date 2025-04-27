import React from "react";
import { Drawer, Spin } from "antd";
 
// eslint-disable-next-line react-refresh/only-export-components
export const useDrawer = () => {
  const [isShowDrawer, setIsShowDrawer] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleShowDrawer = React.useCallback (() => {
    setIsShowDrawer(!isShowDrawer);
  }, [isShowDrawer]) 

  return { isShowDrawer, handleShowDrawer, loading, setLoading };
};

export interface DrawerModalProps {
  show: boolean;
  onClose: () => void;
  loading?: boolean;
  children?: React.ReactNode;
}
export default function DrawerModal({
  show,
  onClose,
  loading = false,
  children = <></>,
}: DrawerModalProps) {

  return (
    <Drawer
      open={show}
      onClose={onClose}
      maskClosable={false}
      title={<div>Catalogos</div>}
    >
      <Spin spinning={loading}  tip="Loading...">
        { children }
      </Spin>
    </Drawer>
  );
}
