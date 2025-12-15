export type EmptyStateType = "error" | "empty";

export type EmptyStateConfig = {
    [K in EmptyStateType]: {
        title: string;
        subtitle: string;
        icon: string;
    }
}

export interface EmptyStateProps {
    type: EmptyStateType;
}