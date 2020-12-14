<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="user_list">
  <ul>
    <% @rooms.each do |room| %>
      <li>
        <%= link_to (room) do %>
          <div class="icon">
            <img src="<%= room.user.picture_url %>" alt="<%= room.user.display_name %>">
          </div>
          <p data-id="<%= room.id %>"><%= room.user.display_name %></p>
          <span class="content"><%= room.last_message %></span>
          <i class="alert"><%= room.unread_count %></i>
          <time><%= room.updated_at.to_s(:datetime_jp) %></time>
        <% end %>
        <div class="pin">
          <%= link_to "", pin_room_path(room.id), method: :post, remote: true, class: room.pin ? 'icon-star2' : 'icon-star' %>
        </div>
      </li>
    <% end %>
  </ul>
  <%= paginate @rooms, param_name: :rooms_page %>
  <div class="page-load-status">
    <p class="infinite-scroll-request">
    読み込み中...
    </p>
  </div>
</div>
</body>
</html>