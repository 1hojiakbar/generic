import React from "react";
import { SidebarItemType } from "../../utils/sidebar";
import { Divider, GroupTitle, SidebarItem } from "./style";

interface SidebarItemsProps {
  items: SidebarItemType[];
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ items }) => {
  const renderItems = (items: SidebarItemType[]): React.ReactNode => {
    return items.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <>
            {!item.group && item.path ? (
              <SidebarItem to={item?.path}>{item?.title}</SidebarItem>
            ) : null}
          </>
          <div className="flex flex-col items-center mt-[5px] mb-[0] w-full">
            {item.group === true && (
              <div className="flex flex-col items-center w-[95%]">
                <GroupTitle>{item.title}</GroupTitle>
                <Divider />
              </div>
            )}
          </div>
        </React.Fragment>
      );
    });
  };

  return <>{renderItems(items)}</>;
};

export default SidebarItems;
