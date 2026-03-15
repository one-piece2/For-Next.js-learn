
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
import SidebarNoteItemHeader from "components/SidebarNoteItemHeader";
export default function SidebarNoteItem({ noteId, note }) {
  //服务端组件可以导入客户端组件，但客户端组件并不能导入服务端组件
  //从服务端组件到客户端组件传递的数据必须是可序列化的（serializable），不能包含函数、类实例、Symbol等非序列化的数据类型。JSON.stringify() 可以用来检查数据是否可序列化。
  //你可以将服务端组件以props的形式传递给客户端组件
  //在服务端组件中使用 JSX 作为传递给客户端组件的 prop，JSX 会先进行服务端组件渲染，再发送到客户端组件中
  const { title, content = "", updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
        <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  );
}
