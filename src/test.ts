import { combineLatest, forkJoin, timer } from 'rxjs';

// Deprecated ✓
forkJoin(timer(100), timer(200));

// Falsely shown as deprecated ✗
forkJoin({t1: timer(100), t2: timer(200)});

// Correctly shown as not deprecated ✓
forkJoin([timer(100), timer(200)]);


// Deprecated ✓
combineLatest(timer(100), timer(200));

// Falsely shown as deprecated ✗
combineLatest({t1: timer(100), t2: timer(200)});

// Correctly shown as not deprecated ✓
combineLatest([timer(100), timer(200)]);