function CreatePostCard() {
  return (
    <div className="card">
      <h2>Create Post</h2>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write your post here..."></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePostCard