
export const sizeStyles = {
    sm : 'py-1 px-2',
    md : 'py-2 px-4',
    lg : 'py-3 px-6',
}

export const variantStyles = {
    primary : 'bg-purple-500 text-white hover:bg-purple-700',
    secondary : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
}

interface ButtonProps { //lets you define iska input aisa hoga
    variant: 'primary' | 'secondary';
    size: 'sm'| 'md' | 'lg'
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button className={`${sizeStyles[props.size]} ${variantStyles[props.variant]}`} >{props.text}</button> // yaha styling aayega
}


<Button 
    variant="primary" 
    size="md" 
    onClick={() => {}} 
    text={"asd"}  
/>