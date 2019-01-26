const Lerp = (a, b, t) => {
    return (1-t)*a+t*b;
}

export {Lerp};