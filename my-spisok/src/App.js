import React from 'react';
import TreeView from 'react-treeview';
import './treeview.css';

const data = [
  {
    type: 'Элементы',
    collapsed: false,
    users: [
      {
        name: 'Элемент-1',
        id: 456,
        collapsed: false,
        items: [
          {
            title: "Элемент-1.1",
            id: 534,
            collapsed: false
          },
          {
            title: "Элемент-1.2",
            id: 578,
            collapsed: false
          },
          {
            title: "Элемент-1.3",
            id: 564,
            collapsed: false
          }
        ]
      },
      {
        name: 'Элемент-2',
        id: 578,
        collapsed: false,
        items: []
      },
      {
        name: 'Элемент-3',
        id: 777,
        collapsed: false,
        items: []
      },
      {
        name: 'Элемент-4',
        id: 897,
        collapsed: false,
        items: []
      },
    ],
  }
];


function App() {
  return (
      <div style={{display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
        {data.map((node, i) => {
          const type = node.type;
          const label = <span className="node">{type}</span>;
          return (
            <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false}>
              {node.users.map(users => {
                const label2 = <span className="node">{users.name}</span>;
                return (
                  <TreeView nodeLabel={label2} key={users.name} defaultCollapsed={true}>
                    <div className="info">id: {users.id}</div>
                    {users.items.map(item => {
                      const label3 = <span className="node">{item.title}</span>
                      return (
                        <TreeView nodeLabel={label3} key={item.title} defaultCollapsed={true} >
                          <div className="info">id: {item.id}</div>
                        </TreeView>
                      );
                    })}
                  </TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </div>
    );
  }

export default App;
