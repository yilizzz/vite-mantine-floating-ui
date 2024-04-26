import {
  StTreeRoot,
  StTreeBranchNode,
  StTreeBranchNodeControl,
  StTreeNode,
} from './tree-view.styled';

import {
  TreeRootProps,
  TreeBranchNodeProps,
  TreeBranchNodeControlProps,
  TreeNodeProps,
} from './tree-view.shared';

import { CirclePlus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';
import { useContext, useState, useEffect } from 'react';
import React from 'react';

export function TreeView({
  data,
  toggled = true,
  name = null,
  isChildElement = false,
  isParentToggled = true,
}) {
  const [isToggled, setIsToggled] = React.useState(toggled);

  return (
    <StTreeRoot
      style={{ marginLeft: isChildElement ? 16 : 4 + 'px' }}
      className={isParentToggled ? 'tree-element' : 'collapsed'}
    >
      <StTreeBranchNodeControl
        className={isToggled ? 'toggler' : `toggler closed`}
        onClick={() => setIsToggled(!isToggled)}
      />
      {name ? <strong>&nbsp;&nbsp;{name} </strong> : <span>&nbsp;&nbsp;</span>}

      {!isToggled && '...'}

      {Object.keys(data).map((v, i, a) =>
        typeof data[v] == 'object' ? (
          <TreeView
            data={data[v]}
            key={i}
            name={v}
            isChildElement
            isParentToggled={isParentToggled && isToggled}
          />
        ) : (
          <p
            key={i}
            style={{ marginLeft: 16 + 'px' }}
            className={isToggled ? 'tree-element' : 'collapsed'}
          >
            {<strong>{v}: </strong>}
            {data[v]}
          </p>
        )
      )}
    </StTreeRoot>
  );
}

// const TreeViewContext = React.createContext({
//   open: false,
//   setOpen: (open: any) => {},
// });

// export const TreeRoot: React.FC<TreeRootProps> = ({ children, ...props }) => {
//   return <StTreeRoot {...props}>{children}</StTreeRoot>;
// };
// export const TreeBranchNode: React.FC<TreeBranchNodeProps> = ({ children, value }) => {
//   const [open, setOpen] = useState(false);
//   const [branchOpen, setBranchOpen] = useState(false);
//   // Check for TreeBranchNode parent during mount
//   useEffect(() => {
//     const hasTreeBranchNodeParent = () => {
//       const parent = document.getElementById(`tree-branch-node-${value}`).parentElement;

//       return parent && parent.classList.contains('tree-branch-node');
//     };

//     // Set initial state based on parent type (default to show without parent)
//     setBranchOpen(!hasTreeBranchNodeParent());
//   }, []);

//   useEffect(() => {
//     open
//       ? document.getElementById(`tree-branch-node-${value}`)?.classList.remove('close')
//       : document.getElementById(`tree-branch-node-${value}`)?.classList.remove('open');

//     console.log(
//       `tree-branch-node-${value}`,
//       document.getElementById(`tree-branch-node-${value}`)?.classList
//     );
//   }, [open]);
//   return (
//     <TreeViewContext.Provider value={{ open, setOpen }}>
//       <StTreeBranchNode
//         className={`tree-branch-node ${branchOpen ? 'open' : 'close'}`}
//         id={`tree-branch-node-${value}`}
//       >
//         {value}
//         {children}
//       </StTreeBranchNode>
//     </TreeViewContext.Provider>
//   );
// };
// export const TreeBranchNodeControl: React.FC<TreeBranchNodeControlProps> = ({
//   children,
//   value,
// }) => {
//   const { open, setOpen } = useContext(TreeViewContext);
//   return (
//     <StTreeBranchNodeControl
//       onClick={() => {
//         console.log(value, !open);
//         setOpen(!open);
//       }}
//     >
//       {children}
//     </StTreeBranchNodeControl>
//   );
// };
// export const TreeNode: React.FC<TreeNodeProps> = ({ children, value }) => {
//   const { open, setOpen } = useContext(TreeViewContext);
//   return (
//     <StTreeNode style={{ display: open ? 'block' : 'none' }} key={value}>
//       {value}
//     </StTreeNode>
//   );
// };
