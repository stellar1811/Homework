function getDegree (number, degree) {
    if (degree === 0) {
        return 1;
    }
    return number * getDegree(number, degree - 1); 
}
getDegree(3, 4)