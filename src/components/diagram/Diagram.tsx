import { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  PanOnScrollMode,
} from '@xyflow/react';
import "./index.css"
import '@xyflow/react/dist/base.css';
import TurboNode, { TurboNodeData } from './Node';
import TurboEdge from './Edge'
import amazon from '../../assets/amazon.png'

const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { icon: <img src={amazon} width={50} height={50} />, title: '' },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x: 0, y: 125 },
    data: { icon: <></>, title: '' },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: 0, y: 250 },
    data: { icon: <></>, title: '' },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: 0, y: 375 },
    data: { icon: <></>, title: '' },
    type: 'turbo',
  },
  {
    id: '5',
    position: { x: 0, y: 500 },
    data: { icon: <></>, title: '' },
    type: 'turbo',
  },
  {
    id: '6',
    position: { x: 400, y: 250 },
    data: { icon: <></>, title: '' },
    type: 'turbo',
  },
  {
    id: '7',
    position: { x: 750, y: 250 },
    data: { icon: <></>, title: '' },
    type: 'turbo',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-6',
    source: '1',
    target: '6',
    animated: true,
  },
  {
    id: 'e2-6',
    source: '2',
    target: '6',
    animated: true,
  },
  {
    id: 'e3-6',
    source: '3',
    target: '6',

    animated: true,

  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    animated: true,
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    animated: true,
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    animated: true,
  },



];

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
  markerEnd: 'edge-circle',
};

const proOptions = { hideAttribution: true };

export const Diagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <section className='container place-items-center py-44 mx-auto h-[1000px]' onWheel={(event) => event.stopPropagation()}>
      <ReactFlow
        proOptions={proOptions}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        zoomOnScroll={false}
        preventScrolling={false}
        panOnScrollMode={PanOnScrollMode.Horizontal}
      >
        <svg>
          <defs>
            <linearGradient id="edge-gradient">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="100%" stopColor="#4287f5" />
            </linearGradient>

            <marker
              id="edge-circle"
              viewBox="-5 -5 10 10"
              refX="0"
              refY="0"
              markerUnits="strokeWidth"
              markerWidth="10"
              markerHeight="10"
              orient="auto"
            >
              <circle stroke="#4287f5" strokeOpacity="0.75" r="2" cx="0" cy="0" />
            </marker>
          </defs>
        </svg>
      </ReactFlow>
    </section>
  );
};
