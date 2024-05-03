import { Group } from '@mantine/core';
import { Props } from './breadcrumb.shared';
import {
  StBreadcrumb,
  StBreadcrumbLink,
  StBreadcrumbMenu,
  StBreadcrumbRoot,
  StBreadcrumbPoints,
} from './breadcrumb.styled';

import { useState } from 'react';

function Breadcrumb({ children, variable = 'allLinks', items, ...props }: Props) {
  const [spread, setSpread] = useState(false);
  const lastIndex = items?.length - 1;
  const middleMenuItems = items.slice(1, -1);

  if (items?.length === 0 || !items) {
    return <>No Data</>;
  }

  return (
    <Group gap="xs">
      {variable === 'allLinks' ? (
        items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <StBreadcrumb key={index}>
              <StBreadcrumbLink href={item.link} className={`${item.active ? 'active' : ''}`}>
                {item.label}
              </StBreadcrumbLink>
              {!isLastItem && <span>&#10513;</span>}
            </StBreadcrumb>
          );
        })
      ) : (
        <StBreadcrumbRoot>
          <StBreadcrumb key={0}>
            <StBreadcrumbLink href={items[0].link} className={`${items[0].active ? 'active' : ''}`}>
              {items[0].label}
            </StBreadcrumbLink>
          </StBreadcrumb>
          <StBreadcrumbPoints onClick={() => setSpread(!spread)}>...</StBreadcrumbPoints>
          {spread ? (
            <StBreadcrumbMenu>
              {middleMenuItems?.map((item, index) => {
                return (
                  <StBreadcrumbLink key={index} href={item.link}>
                    {item.label}
                  </StBreadcrumbLink>
                );
              })}
            </StBreadcrumbMenu>
          ) : (
            <></>
          )}
          <StBreadcrumb key={lastIndex}>
            <StBreadcrumbLink
              href={items[lastIndex].link}
              className={`${items[lastIndex].active ? 'active' : ''}`}
            >
              {items[lastIndex].label}
            </StBreadcrumbLink>
          </StBreadcrumb>
        </StBreadcrumbRoot>
      )}
    </Group>
  );
}

export default Breadcrumb;
