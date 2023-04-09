<ul>
{data.hits.map(item => (
  <li key={item.objectID}>
    <a href={item.url}>{item.title}</a>
  </li>
))}
</ul>