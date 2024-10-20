
i = n - 1;
MAX = a[i];
INDEX = i;

for (i = n - 2; i >= 0; i--) {
  if (MAX < a[i]) {
    MAX = a[i];
    INDEX = i;
  }
}
return INDEX;