export type EmptyStateType = "error" | "empty" | "not_found";

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