


interface ButtonProps { //lets you define iska input aisa hoga
    variant: 'primary' | 'secondary';
    size: 'sm'| 'md' | 'lg'
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button></button> // yaha styling aayega
}


<Button 
    variant="primary" 
    size="md" 
    onClick={() => {}} 
    text={"asd"}  
/>