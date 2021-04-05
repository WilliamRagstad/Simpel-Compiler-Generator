type NodeWithChildren = {
    children: ASTNode[]
}
type NodeWithLeft = {
    left: ASTNode
}
type NodeWithRight = {
    right: ASTNode
}
type NodeWithOperator = {
    op: string
}

export type InfixNode = NodeWithOperator & NodeWithLeft & NodeWithRight;
export type PrefixNode = NodeWithOperator & NodeWithRight;

export type ASTNode = InfixNode | PrefixNode | null;

export type RootNode = NodeWithChildren;