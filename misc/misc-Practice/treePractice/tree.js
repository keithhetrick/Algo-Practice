// Create an object for the tree
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: [
            {
              value: 8,
              children: [],
            },
            {
              value: 9,
              children: [],
            },
          ],
        },
        {
          value: 5,
          children: [],
        },
      ],
    },
    {
      value: 3,
      children: [
        {
          value: 6,
          children: [
            {
              value: 7,
              children: [],
            },
            {
              value: 10,
              children: [
                {
                  value: 11,
                  children: [],
                },
                {
                  value: 12,
                  children: [
                    {
                      value: 13,
                      children: [],
                    },
                    {
                      value: 14,
                      children: [
                        {
                          value: 15,
                          children: [],
                        },
                        {
                          value: 16,
                          children: [
                            {
                              value: 17,
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: 18,
          children: [
            {
              value: 19,
              children: [],
            },
            {
              value: 20,
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const getTreeData = () => {
  return {
    element: "test",
    left: {
      element: "test12",
      left: {
        element: "test122",
      },
      right: {
        element: "test123",
      },
    },
    right: {
      element: "test13",
      left: {
        element: "test132",
        left: {
          element: "test1321",
          left: {
            element: "test13211",
          },
        },
      },
      right: {
        element: "test133",
        left: {
          element: "test1332",
        },
        right: {
          element: "test1333",
          left: {
            element: "test1321",
            left: {
              element: "test13211",
            },
          },
          right: {
            element: "test1321",
            right: {
              element: "test13211",
            },
          },
        },
      },
    },
  };
};

export const renderBinaryTree = (node) => {
  const { left, right, element } = node;
  return `
    <div class="node__element">${element}</div>
    ${
      left || right
        ? `
          <div class="node__bottom-line"></div>
          <div class="node__children">
            ${
              left
                ? `
                <div class="node node--left">
                  ${renderBinaryTree(left)}
                </div>
                `
                : ""
            }
            ${
              right
                ? `
                <div class="node node--right">
                  ${renderBinaryTree(right)}
                </div>
                `
                : ""
            }
          </div>
        `
        : ""
    }
  `;
};

const main = () => {
  const rootNode = getTreeData();
  console.log("treeData", rootNode);
  const treeDOMElement = document.querySelector(".tree");
  if (!rootNode === null || !rootNode === undefined)
    return (treeDOMElement.innerHTML = renderBinaryTree(rootNode));
};

main();

// render the geTreeData function in the DOM
const renderTreeData = (treeData, parent) => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = treeData.element;
  ul.appendChild(li);
  parent.appendChild(ul);

  if (treeData.left) renderTreeData(treeData.left, li);
  if (treeData.right) renderTreeData(treeData.right, li);
};

// Call the function
renderTreeData(getTreeData(), document.body);

// Create a function that will render the tree
const renderTree = (tree, parent) => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = tree.value;
  ul.appendChild(li);
  parent.appendChild(ul);
  tree.children.forEach((child) => renderTree(child, li));
};

// Call the function
renderTree(tree, document.body);

// create an add function & connect to the "add" button
const add = () => {
  const input = document.getElementById("input").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.body.appendChild(li);

  // create a function that adds a child to the tree object using the "add" button
  const addChild = () => {
    const input = document.getElementById("input").value;
    const li = document.createElement("li");
    li.textContent = input;
    document.body.appendChild(li);
    tree.children.forEach((child) => addChild(child, li));
  };
};

// connect the "add" function to the "add" button
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", add, console.log("clicked"));
// console.log(addBtn);

// create a function that adds a child to the tree object using the "add" button
// const addChild = () => {
//   const input = document.getElementById("input").value;
//   const li = document.createElement("li");
//   li.textContent = input;
//   document.body.appendChild(li);
//   tree.children.forEach((child) => addChild(child, li));
// };

// create function for the "remove" button
const remove = () => {
  const input = document.getElementById("remove").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.body.removeChild(li);
};

// create function for the "search" button
const search = () => {
  const input = document.getElementById("search").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.body.search(li);
};

// create function for the "clear" button
const clear = () => {
  const input = document.getElementById("clear").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.body.clear(li);
};

// create function for the "reset" button
// const reset = () => {
//   const input = document.getElementById("input").value;
//   const li = document.createElement("li");
//   li.textContent = input;
//   document.body.reset(li);
// };

// create function for the "randomize" button
const randomize = () => {
  const input = document.getElementById("random").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.body.randomize(li);
};

// create function for the "sort" button
const sort = () => {
  const input = document.getElementById("sort").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.body.sort(li);
};

// create function for the "reverse" button
const reverse = () => {
  const input = document.getElementById("reverse").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.body.reverse(li);
};
