export const canAccessAdmin = (user)=>{
    return user?.role === "admin";
}

export const canEditTask = (user, taskUserId)=>{
    return user?.id === taskUserId || user?.role === "admin";
}

export const canDeleteTask = (user)=>{
    return user?.role === "admin";
}