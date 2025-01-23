
def find_multiples(a, b, c):
  start = min(a, b)
  end = max(a, b)

  if start % c == 0:
    first = start
  else:
    first = start + (c - start % c)

  if end % c == 0:
    last = end
  else:
    last = end - (end % c)

  if first > end or last < start:
    return 0

  count = (last - first) // c + 1
  return count

print(find_multiples(4, 18, 3))