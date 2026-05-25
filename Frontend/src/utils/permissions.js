export const canAccessAdmin = (user)=>{
    return user?.role?.toLowerCase() === "admin";
}

export const canEditTask = (user, taskUserId)=>{
    return user?._id === taskUserId || user?.id === taskUserId || user?.role?.toLowerCase() === "admin";
}

export const canDeleteTask = (user)=>{
    return user?.role?.toLowerCase() === "admin";
}
