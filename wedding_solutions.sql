-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 11:07 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wedding_solutions`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendees`
--

CREATE TABLE `attendees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date` date DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `organizer_id` int(11) DEFAULT NULL,
  `venue_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `event_attendees`
--

CREATE TABLE `event_attendees` (
  `id` int(11) NOT NULL,
  `event_id` int(11) DEFAULT NULL,
  `attendee_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gate`
--

CREATE TABLE `gate` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gate`
--

INSERT INTO `gate` (`id`, `title`, `images`, `created_at`) VALUES
(1, 'Beautifull Wedding Gate of Sena Cunjo-01', 'g01.jpg', '2023-05-28 05:45:49'),
(2, 'Beautifull Wedding Gate of Sena Malancho-01', 'g1.jpg', '2023-05-28 05:45:49'),
(3, 'Beautifull Wedding Gate of BGB Convention Center-01', 'g2.jpg', '2023-05-28 05:45:49'),
(4, 'Beautifull Wedding Gate of Basundhora City-01', 'g3.jpg', '2023-05-28 05:45:49'),
(5, 'Beautifull Wedding Gate of Radison Blue', 'g4.jpg', '2023-05-28 05:45:49'),
(6, 'Beautifull Wedding Gate of Sena Malancho-02', 'g5.jpg', '2023-05-28 05:45:49'),
(7, 'Beautifull Wedding Gate of Basundhora City-02', 'g6.jpg', '2023-05-28 05:45:49'),
(8, 'Beautifull Wedding Gate of Golf Club-01', 'g7.jpg', '2023-05-28 05:45:49'),
(9, 'Beautifull Wedding Gate of Sena Cunjo-02', 'g8.jpg', '2023-05-28 05:45:49'),
(10, 'Beautifull Wedding Gate of BGB Convention Center-02', 'g9.jpg', '2023-05-28 05:45:49'),
(11, 'Beautifull Wedding Gate of Sena Malancho-03', 'g10.jpg', '2023-05-28 05:45:49');

-- --------------------------------------------------------

--
-- Table structure for table `hall`
--

CREATE TABLE `hall` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hall`
--

INSERT INTO `hall` (`id`, `title`, `images`, `created_at`) VALUES
(1, 'Wedding Hall Of Wedding-solutions coad-1 ', 'h1.jpg', '2023-05-28 09:58:59'),
(2, 'Wedding Hall Of Wedding-solutions coad- 2', 'h2.jpg', '2023-05-28 09:58:59'),
(3, 'Wedding Hall Of Wedding-solutions coad- 3', 'h3.jpg', '2023-05-28 09:58:59'),
(4, 'Wedding Hall Of Wedding-solutions coad- 4', 'h4.jpg', '2023-05-28 09:58:59'),
(5, 'Wedding Hall Of Wedding-solutions coad- 5', 'h5.jpg', '2023-05-28 09:58:59'),
(6, 'Wedding Hall Of Wedding-solutions coad- 6', 'h6.jpg', '2023-05-28 09:58:59'),
(7, 'Wedding Hall Of Wedding-solutions coad- 7', 'h7.jpg', '2023-05-28 09:58:59'),
(8, 'Wedding Hall Of Wedding-solutions coad- 8', 'h8.jpg', '2023-05-28 09:58:59'),
(9, 'Wedding Hall Of Wedding-solutions coad- 9', 'h9.jpg', '2023-05-28 09:58:59'),
(10, 'Wedding Hall Of Wedding-solutions coad- 10', 'h10.jpg', '2023-05-28 09:58:59'),
(11, 'Wedding Hall Of Wedding-solutions coad- 11', 'h11.jpg', '2023-05-28 09:58:59'),
(12, 'Wedding Hall Of Wedding-solutions coad- 12', 'h12.jpg', '2023-05-28 09:58:59');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `p_images` varchar(255) DEFAULT NULL,
  `u_email` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `p_name`, `p_images`, `u_email`, `created_at`) VALUES
(13, 'Stage Of Wedding-solutions coad-1 ', 's1.jpg', 'no email address available', '2023-05-29 11:44:30'),
(14, 'Wedding photoshoot center Of Wedding-solutions coad- 2', 'ph2.jpg', 'no email address available', '2023-05-29 11:44:30'),
(15, 'Beautifull Wedding Gate of Sena Malancho-01', 'g1.jpg', 'no email address available', '2023-05-29 11:44:30'),
(16, 'Wedding Hall Of Wedding-solutions coad- 2', 'h2.jpg', 'no email address available', '2023-05-29 11:44:30'),
(17, 'Stage Of Wedding-solutions coad-1 ', 's1.jpg', 'admin2@gmail.com', '2023-05-29 11:45:28'),
(18, 'Wedding photoshoot center Of Wedding-solutions coad- 2', 'ph2.jpg', 'admin2@gmail.com', '2023-05-29 11:45:28'),
(19, 'Beautifull Wedding Gate of Sena Malancho-01', 'g1.jpg', 'admin2@gmail.com', '2023-05-29 11:45:28'),
(20, 'Wedding Hall Of Wedding-solutions coad- 2', 'h2.jpg', 'admin2@gmail.com', '2023-05-29 11:45:28'),
(25, 'Beautifull Wedding Gate of Basundhora City-01', 'g3.jpg', 'admin@gmail.com', '2023-05-29 15:40:32'),
(27, 'Stage Of Wedding-solutions coad- 4', 's4.jpg', 'admin2@gmail.com', '2023-05-29 16:59:57'),
(28, 'Wedding photoshoot center Of Wedding-solutions coad- 2', 'ph2.jpg', 'admin2@gmail.com', '2023-05-29 16:59:57'),
(29, 'Beautifull Wedding Gate of BGB Convention Center-02', 'g9.jpg', 'admin2@gmail.com', '2023-05-29 16:59:57'),
(30, 'Wedding Hall Of Wedding-solutions coad- 2', 'h2.jpg', 'admin2@gmail.com', '2023-05-29 16:59:57');

-- --------------------------------------------------------

--
-- Table structure for table `organizers`
--

CREATE TABLE `organizers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `photoshoot`
--

CREATE TABLE `photoshoot` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `photoshoot`
--

INSERT INTO `photoshoot` (`id`, `title`, `images`, `created_at`) VALUES
(1, 'Wedding photoshoot center Of Wedding-solutions coad- 1', 'ph1.jpg', '2023-05-28 10:01:30'),
(2, 'Wedding photoshoot center Of Wedding-solutions coad- 2', 'ph2.jpg', '2023-05-28 10:01:30'),
(3, 'Wedding photoshoot center Of Wedding-solutions coad- 3', 'ph3.jpg', '2023-05-28 10:01:30'),
(4, 'Wedding photoshoot center Of Wedding-solutions coad- 4', 'ph4.jpg', '2023-05-28 10:01:30'),
(5, 'Wedding photoshoot center Of Wedding-solutions coad- 5', 'ph5.jpg', '2023-05-28 10:01:30'),
(6, 'Wedding photoshoot center Of Wedding-solutions coad- 6', 'ph6.jpg', '2023-05-28 10:01:30'),
(7, 'Wedding photoshoot center Of Wedding-solutions coad- 7', 'ph7.jpg', '2023-05-28 10:01:30'),
(8, 'Wedding photoshoot center Of Wedding-solutions coad- 8', 'ph8.jpg', '2023-05-28 10:01:30'),
(9, 'Wedding photoshoot center Of Wedding-solutions coad- 9', 'ph9.jpg', '2023-05-28 10:01:30');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rank` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `rank`) VALUES
(1, 'User/Customer'),
(2, 'Super Admin'),
(3, 'Manager');

-- --------------------------------------------------------

--
-- Table structure for table `stage`
--

CREATE TABLE `stage` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stage`
--

INSERT INTO `stage` (`id`, `title`, `images`, `created_at`) VALUES
(1, 'Stage Of Wedding-solutions coad-1 ', 's1.jpg', '2023-05-28 09:55:56'),
(2, 'Stage Of Wedding-solutions coad- 2', 's2.jpg', '2023-05-28 09:55:56'),
(3, 'Stage Of Wedding-solutions coad- 3', 's3.jpg', '2023-05-28 09:55:56'),
(4, 'Stage Of Wedding-solutions coad- 4', 's4.jpg', '2023-05-28 09:55:56'),
(5, 'Stage Of Wedding-solutions coad- 5', 's5.jpg', '2023-05-28 09:55:56'),
(6, 'Stage Of Wedding-solutions coad- 6', 's6.jpg', '2023-05-28 09:55:56'),
(7, 'Stage Of Wedding-solutions coad- 7', 's7.jpg', '2023-05-28 09:55:56'),
(8, 'Stage Of Wedding-solutions coad- 8', 's8.jpg', '2023-05-28 09:55:56'),
(9, 'Stage Of Wedding-solutions coad- 9', 's9.jpg', '2023-05-28 09:55:56'),
(10, 'Stage Of Wedding-solutions coad- 10', 's10.jpg', '2023-05-28 09:55:56'),
(11, 'Stage Of Wedding-solutions coad- 11', 's11.jpg', '2023-05-28 09:55:56'),
(12, 'Stage Of Wedding-solutions coad- 12', 's12.jpg', '2023-05-28 09:55:56'),
(13, 'Stage Of Wedding-solutions coad- 13', 's13.jpg', '2023-05-28 09:55:56'),
(14, 'Stage Of Wedding-solutions coad- 14', 's14.jpg', '2023-05-28 09:55:56'),
(15, 'Stage Of Wedding-solutions coad- 15', 's15.jpg', '2023-05-28 09:55:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `address`, `phone`, `email`, `password`, `created_at`) VALUES
(1, '', '', '', '', '$2y$10$Q2ZLOL1I45rHekIuUZ4TuO4gizF9BVZXutJXQt2mCbnnETn5Y73gK', '2023-05-29 04:42:53');

-- --------------------------------------------------------

--
-- Table structure for table `venues`
--

CREATE TABLE `venues` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `images` varchar(250) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `venues`
--

INSERT INTO `venues` (`id`, `name`, `address`, `capacity`, `images`, `created_at`) VALUES
(33, 'Stage Of Wedding-solutions coad-1 ', NULL, NULL, 's1.jpg', '2023-05-29 09:59:58'),
(34, 'Wedding photoshoot center Of Wedding-solutions coad- 2', NULL, NULL, 'ph2.jpg', '2023-05-29 09:59:58'),
(35, 'Beautifull Wedding Gate of Sena Malancho-01', NULL, NULL, 'g1.jpg', '2023-05-29 09:59:58'),
(36, 'Wedding Hall Of Wedding-solutions coad- 2', NULL, NULL, 'h2.jpg', '2023-05-29 09:59:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendees`
--
ALTER TABLE `attendees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organizer_id` (`organizer_id`),
  ADD KEY `venue_id` (`venue_id`);

--
-- Indexes for table `event_attendees`
--
ALTER TABLE `event_attendees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `attendee_id` (`attendee_id`);

--
-- Indexes for table `gate`
--
ALTER TABLE `gate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hall`
--
ALTER TABLE `hall`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizers`
--
ALTER TABLE `organizers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photoshoot`
--
ALTER TABLE `photoshoot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stage`
--
ALTER TABLE `stage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `venues`
--
ALTER TABLE `venues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendees`
--
ALTER TABLE `attendees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event_attendees`
--
ALTER TABLE `event_attendees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gate`
--
ALTER TABLE `gate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `hall`
--
ALTER TABLE `hall`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `organizers`
--
ALTER TABLE `organizers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photoshoot`
--
ALTER TABLE `photoshoot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `stage`
--
ALTER TABLE `stage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `venues`
--
ALTER TABLE `venues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`organizer_id`) REFERENCES `organizers` (`id`),
  ADD CONSTRAINT `events_ibfk_2` FOREIGN KEY (`venue_id`) REFERENCES `venues` (`id`);

--
-- Constraints for table `event_attendees`
--
ALTER TABLE `event_attendees`
  ADD CONSTRAINT `event_attendees_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`),
  ADD CONSTRAINT `event_attendees_ibfk_2` FOREIGN KEY (`attendee_id`) REFERENCES `attendees` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
