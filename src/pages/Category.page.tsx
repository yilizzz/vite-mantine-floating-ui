import { breadcrumbItems } from '@/Router';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';
import { TreeView } from '@ark-ui/react';
export function Category() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <p>Category content</p>
      <TreeView.Root>
        <TreeView.Label>Tree</TreeView.Label>
        <TreeView.Tree>
          <TreeView.Item value="1.0">
            <TreeView.ItemText>1.0</TreeView.ItemText>
          </TreeView.Item>

          <TreeView.Branch value="2.0">
            <TreeView.BranchControl>
              <TreeView.BranchIndicator>↕️</TreeView.BranchIndicator>
              <TreeView.BranchText>2.0</TreeView.BranchText>
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              <TreeView.Item value="2.1">
                <TreeView.ItemText>2.1</TreeView.ItemText>
              </TreeView.Item>
              <TreeView.Item value="2.2">
                <TreeView.ItemText>2.2</TreeView.ItemText>
              </TreeView.Item>
            </TreeView.BranchContent>
          </TreeView.Branch>

          <TreeView.Branch value="3.0">
            <TreeView.BranchControl>
              <TreeView.BranchIndicator>↕️</TreeView.BranchIndicator>
              <TreeView.BranchText>3.0</TreeView.BranchText>
            </TreeView.BranchControl>
            <TreeView.BranchContent>
              <TreeView.Item value="3.1">
                <TreeView.ItemText>3.1</TreeView.ItemText>
              </TreeView.Item>
            </TreeView.BranchContent>
          </TreeView.Branch>

          <TreeView.Item value="4.0">
            <TreeView.ItemText>4.0</TreeView.ItemText>
          </TreeView.Item>
        </TreeView.Tree>
      </TreeView.Root>
    </>
  );
}
