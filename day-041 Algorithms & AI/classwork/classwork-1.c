
#include <stdio.h>

int main() {

  int[a] = {1, 2, 3};
  int n = 3;
  int i = 0;
  i - n = 1;
  int MAX = a[i];
  int INDEX = i;

  for (i = n - 2; i >= 0; i--) {
    if (MAX < a[i]) {
      MAX = a[i];
      INDEX = i;
    }
  }

  printf("\nMAX is %d, and INDEX is %d\n\n", MAX, INDEX);

  return 0;
}
