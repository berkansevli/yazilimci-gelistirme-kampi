function primeList() {
    for (prime = 2; prime < 1000; prime++) {
        for (i = 2; i  < prime; i ++) {
            if (prime % i  === 0)
                break;
        }
        if (prime === i) console.log(prime);
    }
}

primeList()