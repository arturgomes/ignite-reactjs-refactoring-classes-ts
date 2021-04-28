export interface FoodProps {
    available: boolean;
    food: Food;
    handleEditFood: (food: Food) => void;
    handleDelete: (id: string) => void;
}
export interface HeaderProps {
    openModal: () => void;
}
export interface ComponentProps {
    isFocused: boolean;
    isFilled: boolean;
}
export interface InputProps {
    name: string;
    // All other props
    [x: string]: any;
}
export interface ModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    children?: React.ReactNode;
}
export interface ModalAddFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (food: Food) => void;
}
export interface Food {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
}
export interface InputProps {
    name: string;
}

export interface ModalEditFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateFood: (food: Food) => void;
    editingFood: (food: Food) => void;
}
