export type IButton = {
    title: string
    variant?: string
    $onclickProp?: ()=>void
    type?: string
}

export type IStyle= {
    $variant: string
}